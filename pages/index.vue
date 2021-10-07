<template>
    <div>
        <Hero />
        <section class="section container">
            <div class="buttons">
                <b-button icon-pack="fab" icon-left="facebook" type="is-primary is-medium">
                    立即報名
                </b-button>
                <b-button type="is-primary is-medium">
                    寄送驗證碼
                </b-button>
                <b-button type="is-primary is-medium" disabled>
                    登入
                </b-button>
                <b-button type="is-warning is-medium">
                    查看課程
                </b-button>
                <b-button type="is-ghost">
                    忘記密碼
                </b-button>
                <b-button type="is-ghost has-text-black">
                    查看更多
                </b-button>
            </div>
            <div class="card">
                <div class="card-content py-6 px-8">
                    <b-field label="Name">
                        <b-input placeholder="Text input" />
                    </b-field>

                    <b-field
                        label="Email"
                        type="is-danger"
                        message="This email is invalid"
                    >
                        <b-input
                            type="email"
                            value="john@"
                            maxlength="30"
                        />
                    </b-field>

                    <b-field label="Simple">
                        <b-select placeholder="Select a name" expanded>
                            <option value="flint">
                                Flint
                            </option>
                            <option value="silver">
                                Silver
                            </option>
                        </b-select>
                    </b-field>

                    <b-dropdown
                        expanded
                        aria-role="list"
                    >
                        <template #trigger>
                            <b-button
                                type="is-primary-light"
                                icon-right="menu-down"
                            >
                                Selected
                            </b-button>
                        </template>

                        <b-dropdown-item value="option1" aria-role="listitem">
                            <span>Option 1</span>
                        </b-dropdown-item>

                        <b-dropdown-item value="option2" aria-role="listitem">
                            <span>Option 2</span>
                        </b-dropdown-item>

                        <b-dropdown-item value="option3" aria-role="listitem">
                            <span>Option 3</span>
                        </b-dropdown-item>
                    </b-dropdown>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea has-background-primary-light" placeholder="Textarea" />
                        </div>
                    </div>

                    <b-field>
                        <b-checkbox type="is-primary">
                            I agree to the <a href="#" class="is-family-secondary">terms and conditions</a>
                        </b-checkbox>
                    </b-field>

                    <b-field class="block">
                        <b-radio
                            native-value="info"
                            type="is-primary"
                        >
                            Yes
                        </b-radio>
                        <b-radio
                            native-value="info"
                            type="is-primary"
                        >
                            No
                        </b-radio>
                    </b-field>

                    <div class="buttons">
                        <b-button size="is-primary is-medium">
                            送出變更
                        </b-button>
                        <b-button size="is-primary is-medium" disabled>
                            送出變更
                        </b-button>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Hero from '~/components/Hero'
import Footer from '~/components/Footer'

export default {
    name: 'HomePage',

    components: {
        Hero,
        Footer
    }
}
</script>
