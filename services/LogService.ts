import "reflect-metadata";
import { Container, injectable, inject } from 'inversify';


interface ILogger {
  log(message: string): void;
}
   
@injectable()
class ConsoleLogger implements ILogger {
  a=4;
  constructor(){

  }
  log(message: string) {    
    console.log(this.a++);
  }
}
const container = new Container();
container.bind<ILogger>('ILogger').to(ConsoleLogger);
const kb = container.get<ILogger>('ILogger');
export  {ILogger,container,kb} ;
//const kb = new ConsoleLogger()
//export {kb}





export class LogService {
  private logs: string[] = [];

  addLog(log: string) {
    this.logs.push(log);
  }

  getLogs(): string[] {
    return this.logs;
  }
}
