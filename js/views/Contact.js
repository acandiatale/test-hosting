export default class Contact {
    constructor() {
        document.title = "VoxelVital - 문의하기";
    }

    async getHtml() {
        return `
            <div class="contact">
                <section class="first-section">
                    <h1>문의하기</h1>
                    <p>궁금하신 점이 있으시다면 문의해주세요.</p>
                </section>
            </div>
        `;
    }
} 