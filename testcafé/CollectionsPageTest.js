import {ClientFunction, Selector} from 'testcafe';

fixture("testing the collection page").page("http://localhost:3000/")

const addcollectionclick = await Selector('btnAddCollection')
const searchbarinput = await Selector('searchbar')

test("clicking the add collection button", async t =>{
    await t
        .click(addcollectionclick)
    const url = await ClientFunction(() => window.location.href);

    await t
        .expect(url()).eql('http://localhost:3000/collection/create')
})

test("testing input fields to see if they are writable", async t =>{

    await t
        .typeText(searchbarinput, 'test')
        .expect(searchbarinput.value).eql('test')
})