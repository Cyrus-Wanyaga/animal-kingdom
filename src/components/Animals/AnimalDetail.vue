<template>
    <div class="container-fluid px-5">
        <div class="row">
            <!-- Animal Image to the Left -->
            <div class="col-md-4 animal-container" ref="animalContainer">
                <img :src="`${animalImageUrls[0].urls.regular} || 'N/A'`"
                    :alt="`${animal.name} image`" class="animal-image">
            </div>

            <!-- Details and Text Area to the Right -->
            <div class="col-md-8 py-5">
                <div class="row">
                    <h1 class="px-0">{{ capitalizeFirstLetter(animal.name) }}</h1>
                    <div class="card mt-3 p-3" data-bs-theme="dark">
                        <div class="">
                            <h3>Taxonomy ></h3>
                            <div class="mt-3">
                                <h6>Kindom : <span>{{ animalDetails.taxonomy.kingdom }}</span></h6>
                                <h6>Phylum : <span>{{ animalDetails.taxonomy.phylum }}</span></h6>
                                <h6>Class : <span>{{ animalDetails.taxonomy.class }}</span></h6>
                                <h6>Order : <span>{{ animalDetails.taxonomy.order }}</span></h6>
                                <h6>Family : <span>{{ animalDetails.taxonomy.family }}</span></h6>
                                <h6>Galleryenus : <span>{{ animalDetails.taxonomy.genus }}</span></h6>
                                <h6>Scientific Name : <span>{{ animalDetails.taxonomy.scientific_name }}</span></h6>
                            </div>
                            <h3 class="mt-3">Locations ></h3>
                            <div class="mt-3">
                                {{ animalDetails.locations[0] }}
                            </div>
                            <h3 class="mt-3">Characteristics ></h3>
                            <div class="mt-3">
                                <h6>Prey : <span>{{ animalDetails.characteristics.prey }}</span></h6>
                                <h6>Name of young : <span>{{ animalDetails.characteristics.name_of_young }}</span></h6>
                                <h6>Group Behavior : <span>{{ animalDetails.characteristics.group_behavior }}</span>
                                </h6>
                                <h6>Biggest Threat : <span>{{ animalDetails.characteristics.biggest_threat }}</span>
                                </h6>
                                <h6>Diet : <span>{{ animalDetails.characteristics.diet }}</span></h6>
                                <h6>Habitat : <span>{{ animalDetails.characteristics.habitat }}</span></h6>
                                <h6>Type : <span>{{ animalDetails.characteristics.type || 'N/A' }}</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="mt-4 col-md-8">
                        <div v-for="(image, index) in animal.images" :key="index" class="gallery-item">
                            <img :src="image" :alt="`${animal.name} gallery image ${index}`">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 mt-4">
            </div>
            <!-- Scrollable Image Gallery Below -->

        </div>
    </div>
</template>

<script>
export default {
    props: ['animal'],
    mounted() {
        this.setDynamicHeight();
        window.addEventListener("resize", this.setDynamicHeight());
    },
    data() {
        return {
            animalDetails: {},
            animalImageUrls: [], 
            animal: {
                name: '',
                imageUrl: '',
                description: '',
                images: [],
            },
        };
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.setDynamicHeight());
    },
    created() {
        // Fetch animal details using the route param
        const animalName = this.$route.params.animal;

        // Simulate an API call
        this.fetchAnimalDetails(animalName);
        // this.setDynamicHeight();
    },
    methods: {
        fetchAnimalDetails(animalName) {
            // Simulate API call response
            const myHeaders = new Headers();
            myHeaders.append('X-Api-Key', import.meta.env.VITE_ANIMALS_API_KEY);
            myHeaders.append('content-type', 'application/json');

            const myHeaders2 = new Headers();
            myHeaders2.append('Authorization', `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`);
            myHeaders2.append('Content-Type', 'application/json');
            myHeaders2.append('Accept-Version', 'v1');

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };

            const requestOptions2 = {
                method: "GET",
                headers: myHeaders2,
                redirect: "follow"
            }

            console.log(requestOptions2);
            console.log(animalName);
            fetch(`https://api.unsplash.com/search/photos?query=${animalName}&page=1`,
                requestOptions2
            ).then(
                (response) => response.json()
            ).then(result => {
                this.animalImageUrls = result.results;
            }).catch((error) => {
                console.log('Failed : ', error);
            });

            fetch(`https://api.api-ninjas.com/v1/animals?name=${animalName}`,
                requestOptions,
            ).then(
                (response) => response.json()
            ).then(result => {
                this.animalDetails = result[0];

            }).catch((error) => {
                console.log(error);
            });

            const apiResponse = {
                name: animalName,
                imageUrl: `https://example.com/${animalName}.jpg`,
                description: `Details about ${animalName}`,
                images: [
                    `https://example.com/${animalName}-1.jpg`,
                    `https://example.com/${animalName}-2.jpg`,
                    // More images...
                ],
            };

            this.animal = apiResponse; // Set the fetched data
        },
        setDynamicHeight() {
            // Get the height of the navbar
            const navbar = document.querySelector('nav'); // Make sure your navbar is a <nav> element
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            // Calculate the available height minus navbar height and some padding
            const availableHeight = window.innerHeight - navbarHeight;
            // const padding = 50; // Adjust padding value as needed

            console.log('height : ', availableHeight);
            console.log(`${this.$refs.animalContainer}`);
            // Set the height dynamically
            this.$refs.animalContainer.style.height = `${availableHeight}px`;
        },
        capitalizeFirstLetter(str) {
            if (!str) return '';
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
    },
};
</script>

<style scoped>
.animal-container {
    overflow: hidden;
}

.animal-detail {
    padding: 20px;
}

.detail-content {
    display: flex;
    align-items: center;
}

.animal-image {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 48px 0 48px 0;
}

.animal-description {
    padding: 20px 0 20px 0;
    /* background-color: #f8f9fa; */
    border-radius: 10px;
}

.image-gallery {
    display: flex;
    overflow-x: auto;
}

.gallery-item {
    margin-right: 10px;
}

.gallery-item img {
    width: 100px;
    height: auto;
    border-radius: 8px;
}

span {
    font-size: 16px;
    font-weight: lighter;
}

.card {
    background-color: #39785b !important;
}
</style>