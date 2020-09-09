const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: 'Kevyn Gonçalves',
        avatar: 'https://pbs.twimg.com/profile_images/981989947002499072/9e7-LJxm.jpg', 
        whatsapp: '85987799', 
        bio: 'Estudioso da lingua universal.', 
    }

    classValue = {
        subject: 1, 
        cost: '100', 
        //o proffy id virá pelo BD
    } 

    classScheduleValues = [
        //class_id virá pelo BD após cadastrarmos a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

   // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //consultar dados insiridos

    //todos os proffys

    const selectedProffys = await db.all('SELECT * FROM proffys')

    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //trazer junto os dados do professor

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
        `)
    // console.log(selectedClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo é das 8 até as 18
    //o horario do time_from (8) precisa ser menor ou igual ao horario solicitado
    //o horario do time_to (18) precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = '1'
        AND class_schedule.weekday = '0'
        AND class_schedule.time_from <= '520'
        AND class_schedule.time_to > '520'
    `)

    // console.log(selectClassesSchedules)

})