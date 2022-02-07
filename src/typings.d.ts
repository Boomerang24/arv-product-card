declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}

// En caso de necesitar otro tipo de formato, se agrega otro declare
