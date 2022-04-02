# jsonsearch
``Oobject key ``

 for (let key in data) {
    if (Array.isArray(data[key])) {

        const filtered = data[key].filter(item => item !== 'N/A' && item !== '-' && item !== '');
        data[key] = filtered

    } else if (typeof data[key] === 'object') {

        for (let item in data[key]) {
            if (data[key][item] === 'N/A' || data[key][item] === '-' || data[key][item] === '') {
                delete data[key][item]
            }
        }

    } else {

        if (data[key] === 'N/A' || data[key] === '-' || data[key] === '') {
            delete data[key]
        }

    }
