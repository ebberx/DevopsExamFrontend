import { Selector } from 'testcafe';
import {click} from "@testing-library/user-event/dist/click.js";

fixture("testing the create collection page").page("http://localhost/overview/create")

test("testing input fields", async t =>{
    const nameinput = await Selector('#collectionname')
    const descriptioninput = await Selector('#collectiondescription')
    const urlinput = await Selector('#collectionimageurl')
    await t
        .typeText(nameinput, 'test')
        .typeText(descriptioninput, 'what a test')
        .typeText(urlinput, 'https://i.imgur.com/kaI2iEj.jpeg')

        .expect(nameinput.value).eql('test')
        .expect(descriptioninput.value).eql('what a test')
        .expect(urlinput.value).eql('https://i.imgur.com/kaI2iEj.jpeg')
})

test("testing creating a collection, need some popup or message or whatever to tell the user collection successfully created", async t =>{
    const nameinput = await Selector('#collectionname')
    const descriptioninput = await Selector('#collectiondescription')
    const urlinput = await Selector('#collectionimageurl')
    const createclick = await Selector('#btncreate')

    await t
        .typeText(nameinput, 'test')
        .typeText(descriptioninput, 'what a test')
        .typeText(urlinput, 'https://i.imgur.com/kaI2iEj.jpeg')
        .click(createclick)

        .expect()



})