<script>
    import data from "../../data.json";
    let stdent = $state();

    async function fetchPeople() {
        const response = data.student;
        stdent = response;
    }

    fetchPeople();
</script>

<h1>People List</h1>
{#each stdent as person}
    <a href={`/student/${person.number}`}>{person.name} ({person.nickname})</a
    ><br />
{/each}
