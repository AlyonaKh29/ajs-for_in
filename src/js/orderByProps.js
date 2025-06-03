export function orderByProps(obj, order) {
    const sortObj = [];
    const otherObj = [];

    for (let property in obj) {
        let item = { key: property, value: obj[property] };
        order.includes(property) ? sortObj.push(item) : otherObj.push(item);
    }

    sortObj.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
    otherObj.sort((a, b) => a.key.localeCompare(b.key));

    return [...sortObj, ...otherObj];
}
