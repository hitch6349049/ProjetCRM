import { test } from '@playwright/test'

import {Logine} from '../keyword/Logine_logout'
import {CreeTaskCrm} from '../keyword/Creat_project'
import data from '../DataPool/data.json'



test.describe('creation tach fichier data',()=>{
    data.forEach((taskData)=>{
        test(`creation tach connexe ${taskData.name}`,async({page})=>{
            const connecter=new Logine(page)
            const creeUneTache=new CreeTaskCrm(page)


            await page.goto('http://192.168.2.37/index.php?module=Users&action=Login')
            await connecter.Connecter('user','TAALBIH1066')
            await creeUneTache.creationTask(
                taskData.name,
                taskData.Sdate,
                taskData.fdate,
                taskData.valeurStat,
                taskData.valeurRelated,
                taskData.valeurPriority


            )










        })










    })
















})