/*
* Basic Prop types example
* A list of Typescript types you will use in React+ Typescript
* */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AppProps = {
    message: string;
    count : number;
    disabled: boolean;
    /*array of a type*/
    names: string[];
    /*union type*/
    status: "waiting" | "success";
    /*an object with known properties*/
    obj: {
        id: string;
        title: string;
    }
    objArr: {
        id: string;
        title: string
    }[]
    obj2: object
    // onClick: () => void
    onChange: (id: number) => void
    onClick(event: React.MouseEvent<HTMLButtonElement>): void
}