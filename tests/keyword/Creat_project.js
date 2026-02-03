import { expect } from "@playwright/test"

export class CreeTaskCrm{
    constructor(page){
        this.page=page
        this.link_All=page.locator('#grouptab_5')
        this.link_task=page.locator("//a[@id='grouptab_5']/../ul/li/a[text()='Tasks']")
        this.link_creat_task=page.locator('.actionmenulink',{hasText:'Create Task'} )
        this.input_Subject=page.locator('#name')
        this.input_startdate=page.locator('#date_start_date')
        this.input_final_date=page.locator('#date_due_date')
        this.input_description=page.locator('#description')
        this.btn_save=page.locator('#SAVE')
        this.Select_statut=page.locator('#status')
        this.Select_Related=page.locator('#parent_type')
        this.Select_Priority=page.locator('#priority')
        this.flash_notice=page.locator('.module-title-text')
    }

    async SelectionerStatut(valeur){
        await this.Select_statut.selectOption({value:valeur})

    }

    async SelectionnerRelated(valeurRe){

        await this.Select_Related.selectOption({value:valeurRe})
    }

    async SelectionnerPriority(valeurprio){
       await  this.Select_Priority.selectOption({value:valeurprio})
    }


    async creationTask(name,Sdate,fdate,valeurStat,valeurRelated,valeurPriority){
        await this.link_All.hover()
        await this.link_task.click()
        await this.link_creat_task.click()
        await this.input_Subject.fill(name)
        await this.input_startdate.fill(Sdate)
        await this.input_final_date.fill(fdate)
        await this.SelectionerStatut(valeurStat)
        await this.SelectionnerRelated(valeurRelated)
        await this.SelectionnerPriority(valeurPriority)
        await this.btn_save.first().click()
        await expect(this.flash_notice).toContainText(name)
    }









}