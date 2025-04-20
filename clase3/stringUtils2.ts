export function capitalize(str: string): string{
    return str[0].toUpperCase()+ str.slice(1)
}
export function reverse(str: string): string{
    return str.split("").reverse().join("")
}

console.log(capitalize("pastelito"))