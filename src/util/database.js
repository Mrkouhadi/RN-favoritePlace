import * as sqlite from 'sqlite'

const db = sqlite.openDatabase('images.db')

export const init=()=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx =>{
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS Users(ID INTEGER PRIMARY KEY AUTOINCREMENT,Name TEXT, Age INTEGER)",
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
    export const insertUser = (name, age) =>{
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
        // data fetching
       export const fetchUsers = () =>{
            const promise = new Promise((resolve, reject) =>{
                db.transaction((tx) =>{
                    tx.executeSql(
                        "SELECT * FROM Users",
                        [],
                        (_, result)=>resolve(result.rows._array), // u can also log the result
                        (_,error) => reject(error)
                    )
                })
            })
            return promise;
        }