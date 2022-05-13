import * as sqlite from 'sqlite'

const db = sqlite.openDatabase('images.db')

const init=()=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                "CREATE TABLE.......",
                [],
                ()=>{
                    resolve()
                },
                (_, error) =>{
                    reject(error)
                }
            )
        })
    })
    return promise;
}

    // Data insertion
    const insertUser = (name, age) =>{
        const promise = new Promise((resolve, reject)=>{
            db.transaction(tx =>{
                tx.executeSql(
                    "INSERT INTO Users (Name, Age) VALUES (?,?)", // u can remove [] and fill in ??
                    [name, age],
                    (_, result)=>{
                        console.log(result);
                        resolve(result)
                    },
                    (_, error) => reject(error)
                )
            })
        })
        return promise;
    };
    const inserUserHanlder = async (name,age) => {  // inside the form component
        await insertUser(name, age);
    };