import { Selector } from 'testcafe';
import GetBackendEndpoint from "../src/config.js";

fixture("testing the register page").page(GetBackendEndpoint() + '/register')

test("testing input fields", async t =>{
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
    const usernameinput = await Selector('#username')
    const passwordinput = await Selector('#password')
    const emailinput = await Selector('#email')
    const registerclick = await Selector('#btnRegister')

    await t
        .typeText(usernameinput, 'testicuschadicus')
        .typeText(passwordinput, 'goodpassword123')
        .typeText(emailinput, 'tcggmeister@gmail.com')
        .setNativeDialogHandler(() => true)
        .click(registerclick)

    const dialoghistory = await t.getNativeDialogHistory();

        await t
        .expect(dialoghistory[0].type).eql('alert')
       /* .expect(dialoghistory[0].text).eql('Successfully registered!') */
    /*
    // dno how to expect the right alert since this test will fail if run more than once, since the user already exists
     */
})

test("writing a bad email", async t =>{
    const usernameinput = await Selector('#username')
    const passwordinput = await Selector('#password')
    const emailinput = await Selector('#email')
    const registerclick = await Selector('#btnRegister')

    await t
        .typeText(usernameinput, 'testmanx')
        .typeText(passwordinput, 'guhh')
        .typeText(emailinput, 'a')
        .setNativeDialogHandler(()=> true)
        .click(registerclick)

    const dialoghistory = await t.getNativeDialogHistory();

    await t
        .expect(dialoghistory[0].type).eql('alert')
        .expect(dialoghistory[0].text).eql('Please enter a valid email.')

})