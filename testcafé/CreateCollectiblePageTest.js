import {ClientFunction, Selector} from 'testcafe';
import {useParams} from "react-router-dom";
import GetBackendEndpoint from "../src/config.js";

//need to make sure it loads some test users collections and that it has the assigned collectionid

fixture("testing the create collectible page").page("http://localhost:3000" + "/collection/6/add")

test("testing input fields to see if they are writable", async t =>{
    const attributenameinput = await Selector('Attributename')
    const imageurlinput = await Selector('image')

    await t
        .typeText(attributenameinput, 'test')
        .typeText(imageurlinput, 'ahh')
        .expect(attributenameinput.value).eql('test')
        .expect(imageurlinput.value).eql('ahh')
})

//need to fix adding collectibles

/*
test("clicking the add collection button", async t =>{
    await t
        .click(btncreateclick)
    const url = await ClientFunction(() => window.location.href);

    await t
        .expect(url()).eql('http://localhost:3000/collection/'++'/add')
})
 */