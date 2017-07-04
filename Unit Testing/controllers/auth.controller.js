function AuthController() {

    let user;
    let roles;

    function setRoles(role) {
        roles = role;
        user.roles = role;
    }

    function setUser(inUser) {
        user = inUser;
    }

    function isAuthorized(neededRole) {
        if (user) {
            return user.isAuthorized(neededRole);
        }
    }

    function isAuthorizedAsync(neededRole, cb) {
        // async 
        setTimeout(() => {
            cb(roles.indexOf(neededRole) >= 0)
        }, 0);
    }

    function isAuthorizedPromise(neededRole, cb) {
        // async 
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(roles.indexOf(neededRole) >= 0)
            }, 0);
        });
    }

    function getIndex(req, res) {
        try {
            if (req.user.isAuthorized('admin')) {
                return res.render('index');
            }
            res.render('noAuth');
        } catch (e) {
            res.render('error');
        }


    }
    return { setRoles, isAuthorized, isAuthorizedAsync, isAuthorizedPromise, getIndex, setUser };
}




module.exports = AuthController();