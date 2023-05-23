import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import GetBackendEndpoint from "../src/config.js";

fixture("testing the overview page").page("http://localhost:3000" + "/overview")

test("testing input fields", async t =>{
    const searchinput = await Selector('#searchbar')

    await t
        .typeText(searchinput, 'test')
        .expect(searchinput.value).eql('test')
})

test("clicking the add collection button", async t =>{
    const buttonclick = await Selector('#btnAddCollection')

    await t
        .click(buttonclick)
        const url = await ClientFunction(() => window.location.href);
    await t
        .expect(url()).eql("http://localhost:3000" + '/collection/create')
})