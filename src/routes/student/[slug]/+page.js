import data from "../../../data.json";
/**
 * @param {{ params: { slug: string } }} context
 */

export async function load({ params }) {
    const response = data.student;
    const people = response;

    const person = people.find(
        (p) => p.id.toString() === params.slug.toString()
    );

    if (!person) {
        throw new Error("Person not found"); // Handle 404
    }

    return { person };
}
