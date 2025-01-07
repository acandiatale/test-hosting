export default class HowItWorks {
    constructor() {
        document.title = "VoxelVital - 제품 소개";
    }

    async getHtml() {
        return `
            <div class="how-it-works">
                <section class="first-section">
                    <h1>제품 소개</h1>
                    <p>VoxelVital의 혁신적인 3D 스캔 기술을 소개합니다.</p>
                </section>
            </div>
        `;
    }
} 