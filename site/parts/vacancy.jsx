export default ({ vacancy }) => <article class='vacancy'>
    <h2 class='title'>{vacancy.title}</h2>
    <time class='closingDate'>{vacancy.closingDate}</time>
    <div class='description'>{vacancy.description}</div>
</article>
