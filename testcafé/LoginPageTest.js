import {ClientFunction, Selector} from 'testcafe';

fixture("testing the login page").page("http://localhost:3000/")

test("testing input fields", async t =>{
    const emailinput = await Selector('#username')
    await t
        .typeText(emailinput, 'test')
        .expect(emailinput.value).eql('test')
})

test("clicking the login button", async t =>{
    const loginclick = await Selector('#btnLogin')
    const emailinput = await Selector('#username')
    const passwordinput = await Selector('#password')
    await t
        .typeText(emailinput, 'whatduh@gmail.com')
        .typeText(passwordinput, 'testguhh')
        .click(loginclick)
        const url = await ClientFunction(() => window.location.href);

    await t
        .expect(url()).eql('http://localhost:3000/overview')

})