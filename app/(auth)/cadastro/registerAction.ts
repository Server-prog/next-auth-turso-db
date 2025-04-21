'use server'

import db from '@/lib/db'
import { hashSync } from 'bcrypt-ts';


export default async function registerAction(formData: FormData) {
    
    const entries = Array.from(formData.entries()
    
);
    const data = Object.fromEntries(entries) as{
        name: string;
        email: string;
        password: string;
    }

    console.log('****** Server Action Register User ******')
    console.log(data);

    //Se não tiver email, nome ou senha, deve retorar um erro

    if (!data.email || !data.name || !data.password){
        throw new Error('voce precisa passar todos os dados!')
    }

    //Se um usuario ja existe, retorna um erro



    //Se não existir, retorna criar um usuario
    await db.user.create({
        data: {
            email: data.email,
            name: data.name,
            password: hashSync(data.password),
        },
    })

}