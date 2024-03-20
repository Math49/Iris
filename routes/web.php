<?php

use App\Http\Controllers\ForumController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/dashboard/users', [ProfileController::class, 'index'])->name('users.index');
    Route::post('/dashboard/users/{user}/role', [ProfileController::class, 'updateRole'])->name('users.updateRole');

    Route::get('/forum', [ForumController::class, 'index'])->name('forum.index');
    Route::get('/forum/{id}', [ForumController::class, 'showPost'])->name('forum.showPost');
    Route::post('/comment/{id}', [ForumController::class, 'comment'])->name('forum.comment');
    Route::post('/forum/create', [ForumController::class, 'create'])->name('forum.createPost');

    Route::get('/posts', [ForumController::class, 'posts'])->name('posts.index');
    Route::delete('/posts/{id}', [ForumController::class, 'destroyPost'])->name('posts.destroy');

    Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
    Route::get('/blog/create', [BlogController::class, 'addBlog'])->name('blog.add');
    Route::post('/blog/create', [BlogController::class, 'create'])->name('blog.create');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
