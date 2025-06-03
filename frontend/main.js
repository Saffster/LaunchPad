async function fetchIdeas() {
    const res = await fetch('http://127.0.0.1:8000/ideas');
    const ideas = await res.json();
    const container = document.getElementById('ideasContainer');
    container.innerHTML = '';

    ideas.forEach(idea => {
        const card = document.createElement('div');
        card.className = 'idea-card bg-white rounded-lg overflow-hidden shadow-md p-4';
        card.innerHTML = `
            <h3 class="font-bold text-lg">${idea.title}</h3>
            <p>${idea.description.substring(0, 100)}...</p>
            <p class="text-sm text-gray-500 mt-2">Category: ${idea.category} | Rating: ${idea.rating}</p>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchIdeas();

    const form = document.getElementById('postIdeaForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const data = {
                title: form.ideaTitle.value,
                category: form.ideaCategory.value,
                stage: form.ideaStage.value,
                description: form.ideaDescription.value,
                image_url: '',
                looking_for: Array.from(form.querySelectorAll('input[type=checkbox]:checked'))
                                  .map(cb => cb.nextElementSibling.textContent.trim())
                                  .join(', ')
            };

            const res = await fetch('http://127.0.0.1:8000/ideas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                form.reset();
                fetchIdeas();
                document.getElementById('postIdeaModal').classList.add('hidden');
            } else {
                alert('Failed to post idea');
            }
        });
    }
});
