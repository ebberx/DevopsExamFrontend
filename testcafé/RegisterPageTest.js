import { Selector } from 'testcafe';

fixture("testing the register page").page("http://localhost:3000/register")

test("testing input fields (can u even check a password field like that?)", async t =>{
    const usernameinput = await Selector('#username')
    const passwordinput = await Selector('#password')
    const emailinput = await Selector('#email')
    await t
        .typeText(usernameinput, 'testicus chadicus')
        .typeText(passwordinput, 'goodpassword123')
        .typeText(emailinput, 'tcggmeister@gmail.com')

        .expect(usernameinput.value).eql('testicus chadicus')
        .expect(passwordinput.value).eql('goodpassword123')
        .expect(emailinput.value).eql('tcggmeister@gmail.com')
})

test("clicking the register button", async t =>{
    const registerclick = await Selector('#btnRegister')
    const usernameinput = await Selector('#username')
    const passwordinput = await Selector('#password')
    const emailinput = await Selector('#email')
    await t
        .typeText(usernameinput, 'testicuschadicus')
        .typeText(passwordinput, 'goodpassword123')
        .typeText(emailinput, 'tcggmeister@gmail.com')
        .setNativeDialogHandler(() => true)
        .click(registerclick)

    const dialoghistory = await t.getNativeDialogHistory();

        await t
        .expect(dialoghistory[0].type).eql('alert')
        /*.expect(dialoghistory[0].text).eql('Successfully registered!')*/
})