module.exports = (app :any) => {
    const { existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const save = async (req :any, res :any) => {
        const Blogs = {
            id: req.body.id,
            date: req.body.date,
            title: req.body.title,
            subtitle: req.body.subtitle,
            imageurl: req.body.imageurl,
            content: req.body.content,
            categoryid: req.body.categoryid,
            userid: req.body.userid
        }
        try {
            
            existsOrError(Blogs.title, 'Informe o Título!')
            existsOrError(Blogs.subtitle, 'Informe o Descrição!')
            existsOrError(Blogs.content, 'Coloque o Conteúdo!')
            existsOrError(Blogs.userid, 'Informe o Usuário!')
            existsOrError(Blogs.categoryid, 'Informe a Categoria!')

        } catch(msg) {
            return res.status(400).send(msg)
        }

        app.db('blogs')
                .insert(Blogs)
                .then((_ :any) => res.status(204).send(_))
                .catch((err :any) => res.status(500).send(err))
    }

    const get = async (req :any, res :any) => {
        const { page, limit } = req.query;
        const offset = (page - 1) * limit;
        const [countResult] = await app.db('blogs').count();
        const totalCount = countResult.count;
        const totalPages = Math.ceil(totalCount / limit);

        app.db('blogs')
            .join('users', 'users.id', 'blogs.userid')
            .join('category', 'category.id', 'blogs.categoryid')
            .select('blogs.id', 'blogs.date', 'blogs.title',
            'blogs.subtitle', 'blogs.imageurl', 'blogs.content',
            'blogs.userid', 'users.name as userName', 'blogs.categoryid', 'category.name as categoryName')
            .offset(offset)
            .limit(limit)
            .then((blog :any) => res.json({
                blog,
                pagination: {
                    page,
                    limit,
                    totalCount,
                    totalPages,
                },
            }))
            .catch((err :any) => res.status(500).send(err))
    }

    const getOrderBy = async (req :any, res :any) => {
        const { page, limit } = req.query;
        const [countResult] = await app.db('blogs').count();
        const totalCount = countResult.count;

        app.db('blogs')
            .join('users', 'users.id', 'blogs.userid')
            .join('category', 'category.id', 'blogs.categoryid')
            .select('blogs.id', 'blogs.date', 'blogs.title',
            'blogs.subtitle', 'blogs.imageurl', 'blogs.content',
            'blogs.userid', 'users.name as userName', 'blogs.categoryid', 'category.name as categoryName')
            .limit(3)
            .from('blogs')
            .orderBy('id', 'desc')
            .then((blog :any) => res.json({
                blog,
                pagination: {
                    page,
                    limit,
                    totalCount,
                },
            }))
            .catch((err :any) => res.status(500).send(err))
    }


    const getById = (req :any, res :any) => {
        app.db('blogs')
            .join('users', 'users.id', 'blogs.userid')
            .join('category', 'category.id', 'blogs.categoryid')
            .where('blogs.id', '=', req.params.id)
            .select('blogs.id', 'blogs.date', 'blogs.title',
            'blogs.subtitle', 'blogs.imageurl', 'blogs.content',
            'blogs.userid', 'users.name as userName', 'blogs.categoryid', 'category.name as categoryName')
            .first()
            .then((blog :any) => res.json(blog))
            .catch((err :any) => res.status(500).send(err))
    }

    const getByCategory = async (req :any, res :any) => {
        const { page, limit, category } = req.query;
        const offset = (page - 1) * limit;
        const [countResult] = 
        await app.db('blogs')
            .join('category', 'category.id', 'blogs.categoryid')
            .where('category.name', '=', category).count();
        const totalCount = countResult.count;
        const totalPages = Math.ceil(totalCount / limit);

        app.db('blogs')
            .join('users', 'users.id', 'blogs.userid')
            .join('category', 'category.id', 'blogs.categoryid')
            .where('category.name', '=', category)
            .select('blogs.id', 'blogs.date', 'blogs.title',
            'blogs.subtitle', 'blogs.imageurl', 'blogs.content',
            'blogs.userid', 'users.name as userName', 'blogs.categoryid', 'category.name as categoryName')
            .offset(offset)
            .limit(limit)
            .then((blog :any) => res.json({
                blog,
                pagination: {
                    page,
                    limit,
                    totalCount,
                    totalPages,
                },
            }))
            .catch((err :any) => res.status(500).send(err))
    }

    const remove = async (req :any, res :any) => {
        try {
            existsOrError(req.params.id, 'Código da não informado.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getOrderBy, getById, getByCategory, remove }
}