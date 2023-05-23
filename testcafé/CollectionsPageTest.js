import {ClientFunction, Selector} from 'testcafe';
import GetBackendEndpoint from "../src/config.js";

fixture("testing the collection page").page(GetBackendEndpoint())

const addcollectionclick = Selector('btnAddCollection')
const searchbarinput = Selector('searchbar')

test("clicking the add collection button", async t =>{
    await t
        .click(addcollectionclick)
    const url = await ClientFunction(() => window.location.href);

    await t
        .expect(url()).eql(GetBackendEndpoint() + '/collection/create')
})

test("testing input fields to see if they are writable", async t =>{

    await t
        .typeText(searchbarinput, 'test')
        .expect(searchbarinput.value).eql('test')
})