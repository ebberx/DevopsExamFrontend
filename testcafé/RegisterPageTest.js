import { Selector } from 'testcafe';
import {click} from "@testing-library/user-event/dist/click.js";

fixture("testing the register page").page("http://localhost/register")

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


        .click(registerclick)
        .expect()
})