import http from "k6/http";
import {check, sleep} from "k6";
import {Counter} from "k6/metrics";


let test = new Counter("errors");

export const options = {
    vus: 1000,
    duration: "1s",
    thresholds: {
       errors: ["count<10"]
    }
};

export default function(){
    let res = http.get('http://localhost:3000/')
    let success = check(res, {
        "200": r => r.status === 200
    });
    if(!success){
        //sadge
        test.add(1);
    }
    sleep(1)
}


