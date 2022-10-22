export default function JSLoader(comp, attempts_left = 500) {
    return new Promise((resolve, reject) => {
        comp()
            .then(function (r){

                if(Boolean(r)) {

                    resolve(r);
                }else {

                    throw new Error("Invalid response");
                }
            })
            .catch((error) => {
                // let us retry after 1500 ms
                setTimeout(() => {
                    if (attempts_left === 1) {
                        reject(error);
                        return;
                    }
                    JSLoader(comp, attempts_left - 1).then(resolve, reject);
                }, 50);
            });
    });
}