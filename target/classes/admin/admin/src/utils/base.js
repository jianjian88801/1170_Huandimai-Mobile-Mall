const base = {
    get() {
                return {
            url : "http://localhost:8080/shoujishangcheng/",
            name: "shoujishangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shoujishangcheng/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "欢迪迈手机商城"
        } 
    }
}
export default base
