function solve(inputArr) {
    var nameTime_Obj = {};
    var nameIpsObj = {};
    var lines = inputArr[0];

    for (var i = 1; i <= lines; i++) {
        var str = inputArr[i];
        var array = str.split(' ');
        var name = array[1];
        var ip = array[0];
        var time = parseInt(array[2]);

        if (nameTime_Obj.hasOwnProperty(name)) {
            nameTime_Obj[name] += time;
        } else {
            nameTime_Obj[name] = time;
        }

        if (nameIpsObj.hasOwnProperty(name)) {
            nameIpsObj[name] += "," + ip;
        } else {
            nameIpsObj[name] = ip;
        }
    }

    var names = [];
    for (var key2 in nameTime_Obj) {
        names.push(key2);
    }
    names.sort();

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var result = name;

        for (var k in nameTime_Obj) {
            if (k === name) {
                result += ': ' + nameTime_Obj[k] + ' ';
            }
        }
        var ips = [];

        for (var key in nameIpsObj) {
            if (key === name) {
                ips = nameIpsObj[key].split(',');
                ips.sort();
                ips = ips.filter(function (item, index, inputArray) {
                    return inputArray.indexOf(item) == index;
                });
                break;
            }
        }

        var ipStr = ips.join(', ');
        result += '[' + ipStr + ']';
        console.log(result);
    }
}

var test = [
'7',
'192.168.0.11 peter 33',
'10.10.17.33 alex 12',
'10.10.17.35 peter 30',
'10.10.17.34 peter 120',
'10.10.17.34 peter 120',
'212.50.118.81 alex 46',
'212.50.118.81 alex 4'
];

var test = [
'30',
'8.8.8.8 pepi 100',
'8.8.8.8 google 999',
'8.8.8.8 google 100',
'8.8.8.8 didi 999',
'10.10.10.10 steve 98',
'10.10.10.10 google 730',
'8.8.8.8 google 150',
'10.10.10.10 test 100',
'8.8.8.8 google 50',
'10.10.10.10 root 46',
'10.10.10.10 root 58',
'8.8.8.8 nakov 167',
'1.2.3.4 peter 120',
'5.6.7.8 root 970',
'192.168.0.33 root 55',
'10.10.10.10 kurtev 302',
'8.8.28.8 google 100',
'8.8.8.8 google 50',
'10.10.10.10 test 98',
'10.10.10.10 google 730',
'8.8.8.8 google 150',
'10.10.10.103 test 100',
'8.8.8.18 google 50',
'10.10.10.10 root 46',
'10.10.10.10 george 58',
'8.8.8.8 root 167',
'1.2.3.4 maria 120',
'5.6.7.8 root 970',
'192.168.0.11 root 55',
'10.10.10.1 test 302',
];

solve(test);