const { PrismaClient } = require('@prisma/client')
const faker = require('faker')
const slugify = require('slugify')
const prisma = new PrismaClient()







const seedDatabase = async () => {

    console.log("Deleting old data... 🥊")
    await prisma.issueToContent.deleteMany()
    await prisma.content.deleteMany()
    await prisma.issue.deleteMany()
    await prisma.category.deleteMany()
    console.log("Deleted old data! 🥊")

    console.log("Creating primary categories...")
    await prisma.category.create({
        data: {
            title: "Mental Health",
            slug: "mental-health",
            description: "A wide variety of mental health topics, including depression, anxiety, and other personal concerns.",
            issues: {
                createMany: {
                    data: [
                        {
                            title: "Anxiety",
                            slug: "anxiety",
                            description: "Anxiety is a difficult topic to discuss.",
                        },
                        {
                            title: "Depression",
                            slug: "depression",
                            description: "Depression is a difficult topic to discuss."
                        },
                        {
                            title: "Self-harm",
                            slug: "self-harm",
                            description: "Self-harm is a difficult topic to discuss.",
                        },
                        {
                            title: "Eating disorders",
                            slug: "eating-disorders",
                            description: "Eating disorders is a difficult topic to discuss."
                        }
                    ]
                }
            }

        }
    })


    await prisma.category.create({
        data: {
            title: "Life issues",
            slug: "life-issues",
            description: "Life can often get in the way. Here you'll find our helpful topics on managing those tough situations.",
            issues: {
                createMany: {
                    data: [
                        {
                            title: "Elderly care",
                            slug: "elderly-care",
                            description: "Elderly care is a difficult topic to discuss.",
                        },
                        {
                            title: "Isolation",
                            slug: "isolation",
                            description: "Isolation is a difficult topic to discuss."
                        },
                        {
                            title: "Death",
                            slug: "death",
                            description: "Death is a difficult topic to discuss.",
                        }
                    ]
                }
            }

        }
    })


    await prisma.category.create({
        data: {
            title: "Social & relationships",
            slug: "social-relationships",
            description: "Friendships, relationships, and those you interact with.",
            issues: {
                createMany: {
                    data: [
                        {
                            title: "Workplace harassment",
                            slug: "workplace-harassment",
                            description: "Workplace harassment care is a difficult topic to discuss.",
                        },
                        {
                            title: "Domestic abuse",
                            slug: "domestic-abuse",
                            description: "Domestic abuse is a difficult topic to discuss."
                        },
                        {
                            title: "Bullying",
                            slug: "bullying",
                            description: "Bullying is a difficult topic to discuss.",
                        }
                    ]
                }
            }

        }
    })
    console.log("Created primary categories 🪄")


    const issues = await prisma.issue.findMany({
        select: {
            id: true
        }
    })

    console.log('Fetched issues 🎩')

    for (let i = 1; i < 50; i++) {

        console.log(`Creating record ${i} of 50...`)
        const title = faker.random.words(3)
        await prisma.content.create({
            data: {
                title: title,
                description: faker.random.words(40),
                image: faker.image.abstract(),
                slug: slugify(title),
                type: faker.datatype.number() > 4 ? "ARTICLE" : "VIDEO",
                issues: {
                    create: {
                        issueId: issues[Math.floor(issues.length * Math.random())].id
                    }
                }

            }
        })
    }

    console.log("Seeded database 🪄")
    prisma.$disconnect()


}

seedDatabase()