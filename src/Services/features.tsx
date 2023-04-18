import { get } from "http";

export const getLinkeSavd = async (key:any) =>{
    const mylinks = await localStorage.getItem(key);

    let linkssalvos = JSON.parse(mylinks) || [];

    return linkssalvos
}


export const savelinks = async (key:any, meulink:any) =>{
    let links = await getLinkeSavd(key);

    const haslink = links.some(link => link.id === meulink.id)

    if(haslink){
        alert("esse link ja existe na lista")
        return;
    }
    links.push(meulink)
    localStorage.setItem(key, JSON.stringify(links))
    console.log('link salvo')

}