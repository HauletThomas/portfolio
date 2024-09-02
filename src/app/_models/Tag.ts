export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly PHP = new Tag('Php', 'green');
    static readonly JSON = new Tag('Json', 'blue');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly CSHARP = new Tag('Csharp', 'purple');
    static readonly ASPNET = new Tag('Aspnet', 'darkred');
    static readonly TYPESCRIPT = new Tag('Typescript', 'brown');
    static readonly CSS = new Tag('CSS', 'pink');
    static readonly HTML = new Tag('HTML', 'lightblue');
    static readonly REST = new Tag('Rest', 'lightgreen');
    static readonly MVC = new Tag('MVC', 'dark');
    static readonly JS = new Tag('JS', 'darkgreen');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}