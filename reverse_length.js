//Given an array of strings, return another array containing all of its longest strings
function testlong(x) {
    x = ["arg", "cd", "vmr", "it", "www"]
    let l = []
    if (x.length === 1) {
        return [x[0]]
    } else {
        function sorts(a, b) {
            return a.length - b.length
        }

        x.sort(sorts).reverse()
        for (let i = 0; i < x.length; i++) {
            if (x[i].length === x[i + 1].length) {
                l.push(x[i])
            } else {
                l.push(x[i])
                break
            }
        }
        return l.reverse()
    }
}