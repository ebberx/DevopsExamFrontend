import {ClientFunction, Selector} from 'testcafe';
import GetBackendEndpoint from "../src/config.js";

fixture("testing the collection page").page(GetBackendEndpoint())


test("clicking the add collection button", async t =>{
    const addcollectionclick = await Selector('btnAddCollection')

    await t
        .click(addcollectionclick)
    const url = await ClientFunction(() => window.location.href);

    await t
        .expect(url()).eql(GetBackendEndpoint() + '/collection/create')
})

test("testing input fields to see if they are writable", async t =>{
    const searchbarinput = await Selector('searchbar')

    await t
        .typeText(searchbarinput, 'test')
        .expect(searchbarinput.value).eql('test')
})