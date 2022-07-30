interface IService<T> {
  create(obj:T):Promise<T>,
  read():Promise<T[]>,
  readOne(_id: string):Promise<T>,
  update(_id: string, obj: T):Promise<T>,
}

export default IService;