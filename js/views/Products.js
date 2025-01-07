export default class Products {
    constructor() {
        document.title = "VoxelVital - 구매하기";
    }

    async getHtml() {
        return `
            <div class="products">
                <section class="first-section">
                    <h1>구매하기</h1>
                    <p>VoxelVital의 맞춤형 베개를 구매하세요.</p>
                </section>
            </div>
        `;
    }
} 