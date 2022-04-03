/**
 * 权限能使用的对应路由
 */
const roleToRoutes = {
	coustomer: ['productList','Product'],
	admin: ['productList', 'productAdd', 'Product', 'Category'],
};
/**
 * 得到菜单不渲染路由
 * @param {角色} role
 * @param {路由} routes
 */
export default function getMenuRoutes(role, routes) {
	const allowRoutesName = roleToRoutes[role];
	const resultRoutes = routes.filter((r) => {
		if (allowRoutesName.indexOf(r.name) !== -1) {
			const children = r.children;
            if(children){
                r.children =children.filter((c) => allowRoutesName.indexOf(c.name) !== -1);
            }
			return true;
		}
        return false
	});
    
	return resultRoutes
}
