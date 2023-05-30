const OUR_DATE_FORMAT = "MMM Do YY"

const ROUTES  = {
    adminHomePage : "/admin",
    articleDetails : "/admin/articles/:articleTitle",
    toarticleDetails : (id : string) =>  "/admin/articles/"+id,
    
    
}

export {
    OUR_DATE_FORMAT,
    ROUTES
}
