import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Conrado Test',
      level: 1,
      class: "SHADOW_MONARCH",
      stats: {
        create: 
          { 
            healthPoints: 300,
            manaPoints: 100,
            fatigue: 0,
            strength: 1,
            stamina: 100,
            agility: 1,                   
            intelligence: 1,                  
            perception: 1,                    
            availablePoints: 1,               
            PhysicalDmgReductionPorcentage: 0,
            MagicalDmgReductionPorcentage : 0,
          }
      },
    },
    include: {
      stats: true
    }
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
