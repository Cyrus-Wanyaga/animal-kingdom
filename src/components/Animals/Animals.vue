<template>
    <div class="row p-5">
        <div :class="['col-lg-3 col-md-6 col-sm-12', {'mt-5': index > 3}]" v-for="(animal, index) in animals" :key="index">
            <div class="card shadow" data-bs-theme="dark">
                <img :src="animal.imageUrl" class="card-img-top" :alt="`${animal.animal} image`">
                <div class="card-body">
                    <h5 class="card-title">
                        {{ animal.animal }}
                    </h5>
                    <!-- <button class="btn btn-primary mt-3"><a href="">Learn More</a></button> -->
                     <a :href="`/animalDetail/${animal.animal.toLowerCase()}`" class="btn btn-primary mt-3">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Animals",
    data() {
        return {
            animals: [
                {
                    animal: "Elephant",
                    imageUrl: "https://images.unsplash.com/photo-1449104532935-d9209c70e2b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwyfHxlbGVwaGFudHxlbnwwfHx8fDE3MjY2MDIwMTJ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Lion",
                    imageUrl: "https://images.unsplash.com/photo-1511216113906-8f57bb83e776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwxfHxsaW9ufGVufDB8fHx8MTcyNjYwMjUwMXww&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Squirrel",
                    imageUrl: "https://images.unsplash.com/photo-1553211274-94febfa26133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwyfHxzcXVpcnJlbHxlbnwwfHx8fDE3MjY2MDI1NTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Cow",
                    imageUrl: "https://images.unsplash.com/photo-1530268782463-418534b0affa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwyfHxjb3d8ZW58MHx8fHwxNzI2NjAyNjI5fDA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Koala",
                    imageUrl: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwxfHxrb2FsYXxlbnwwfHx8fDE3MjY3NzQ3ODJ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Rabbit",
                    imageUrl: "https://images.unsplash.com/photo-1464038293999-0fb8953380d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwxfHxyYWJiaXR8ZW58MHx8fHwxNzI2Nzc0ODcxfDA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Whale",
                    imageUrl: "https://images.unsplash.com/photo-1568430328012-21ed450453ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwyfHx3aGFsZXxlbnwwfHx8fDE3MjY5MzQ1ODR8MA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Shark",
                    imageUrl: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwxfHxzaGFya3xlbnwwfHx8fDE3MjY5MzQ2NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Parrot",
                    imageUrl: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwxfHxwYXJyb3R8ZW58MHx8fHwxNzI2OTM5ODQ3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Lizard",
                    imageUrl: "https://images.unsplash.com/photo-1542884738-c35f6c9c9ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwxfHxsaXphcmR8ZW58MHx8fHwxNzI2OTg1MjY5fDA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Dog",
                    imageUrl: "https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNzI2OTg1MzE0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                    animal: "Snail",
                    imageUrl: "https://images.unsplash.com/photo-1533177243638-dd485701f717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTQ4MzZ8MHwxfHNlYXJjaHwxfHxzbmFpbHxlbnwwfHx8fDE3MjY5ODUzNjN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                }
            ]
        }
    }
}
</script>

<style scoped>
.card-img-top {
    max-height: 300px;
    height: 300px;
    object-fit: cover;
    object-position: center;
}
</style>