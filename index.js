// index.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const jobListingsContainer = document.getElementById('job-listings');
            data.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('job');

                jobElement.innerHTML = `
                    <div class="sub">
                        <img src="${job.logo}" alt="${job.company}">
                        <div class="div1">
                            <p>${job.company}</p>
                            ${job.new ? '<button>new</button>' : ''}
                            ${job.featured ? '<button>featured</button>' : ''}
                        </div>
                        <div>${job.position}</div>
                        <div class="role" data-role="${job.role}" data-level="${job.level}" data-languages="${job.languages.join(', ')}" data-tools="${job.tools.join(', ')}">
                            <button>${job.role}</button>
                            <button>${job.level}</button>
                            ${job.languages.map(lang => `<button>${lang}</button>`).join('')}
                            ${job.tools.map(tool => `<button>${tool}</button>`).join('')}
                        </div>
                    </div>
                `;

                jobListingsContainer.appendChild(jobElement);
            });
        })
        .catch(error => console.error('Error loading job listings:', error));
});
