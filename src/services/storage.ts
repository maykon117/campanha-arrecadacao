import type {AppData} from '../types';
const KEY='campanha-arrecadacao-v1';
export const initialData:AppData={campaign:{id:crypto.randomUUID(),name:'Natal Solidário 2026',metaKg:3000,dataCriacao:new Date().toISOString()},foods:[
{id:crypto.randomUUID(),campanhaId:'',nome:'Café',unidade:'pacotes',pesoPorUnidadeGramas:200,metaQuantidade:150},
{id:crypto.randomUUID(),campanhaId:'',nome:'Arroz',unidade:'pacotes',pesoPorUnidadeGramas:1000,metaQuantidade:500},
{id:crypto.randomUUID(),campanhaId:'',nome:'Feijão',unidade:'pacotes',pesoPorUnidadeGramas:1000,metaQuantidade:300},
{id:crypto.randomUUID(),campanhaId:'',nome:'Macarrão',unidade:'pacotes',pesoPorUnidadeGramas:500,metaQuantidade:200}],donations:[]};
initialData.foods=initialData.foods.map(f=>({...f,campanhaId:initialData.campaign.id}));
export function loadData():AppData{try{const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):initialData}catch{return initialData}}
export function saveData(data:AppData){localStorage.setItem(KEY,JSON.stringify(data))}
export function resetData(){localStorage.removeItem(KEY)}
