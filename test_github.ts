import { getPortfolioProjects } from "./src/lib/github";

async function main() {
    const url = "https://github.com/stars/zmmmdf/lists/portfolio";
    const projects = await getPortfolioProjects(url);
    console.log("Total scraped:", projects.length);
    console.log(JSON.stringify(projects, null, 2));
}

main();
