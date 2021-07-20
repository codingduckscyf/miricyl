const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const seedDatabase = async () => {

    // Create the mental health category
    const mentalHealth = await prisma.category.create({
        data: {
            title: "Mental Health",
            description: "Mental health",
            slug: "mental-health"
        }
    })

    const anxiety = await prisma.issue.create({
        data: {
            title: "Anxiety",
            slug: "anxiety",
            categoryId: mentalHealth.id
        }
    })

    const content = await prisma.content.create({
        data: {
            title: "Content item 1",
            description: "This is the description",
            issues: {
                create: {
                    issueId: anxiety.id
                }
            }
        }
    })


    console.log('seeded')
    prisma.$disconnect()
}

seedDatabase()