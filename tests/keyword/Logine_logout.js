export class Logine{
    constructor(page){
        this.page=page
        this.input_user=page.locator('#user_name')
        this.input_password=page.locator('#username_password')
        this.btn_login=page.locator('#bigbutton')
    
    }


    async Connecter(usernam,password){
        await this.input_user.fill(usernam)
        await this.input_password.fill(password)
        await this.btn_login.first().click()

    }












}