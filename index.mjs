import {ApiPing} from "qiyu-notify";


const resp = await ApiPing.do_get({
    path_args:  null,
    query_args: null,
    header:     null,
    body:       null,
    security:   null,
}, async (info) => {
    return {text: await info.text()};
}, async (info) => {
    console.error(info);
});


console.log(resp);
